import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const DATA_DIR = path.join(process.cwd(), 'data');

// Get generic data
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    if (!section) {
        return NextResponse.json({ error: 'Section parameter is required' }, { status: 400 });
    }

    try {
        const filePath = path.join(DATA_DIR, `${section}.json`);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        return NextResponse.json({ data });
    } catch (error) {
        console.error(`Error reading ${section}.json:`, error);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

// Update generic data
export async function POST(request) {
    try {
        if (process.env.ENABLE_ADMIN !== 'true') {
            return NextResponse.json({ error: 'Data modification is disabled on this environment' }, { status: 403 });
        }

        const authHeader = request.headers.get('authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Missing or invalid token' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const JWT_SECRET = process.env.JWT_SECRET || process.env.ADMIN_PASSWORD || 'fallback-secret-for-local';

        try {
            jwt.verify(token, JWT_SECRET);
        } catch (err) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        const body = await request.json();
        const { section, data } = body;

        if (!section || !data) {
            return NextResponse.json({ error: 'Section and data are required' }, { status: 400 });
        }

        const filePath = path.join(DATA_DIR, `${section}.json`);

        // Write the nicely formatted JSON back to the file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

        return NextResponse.json({ success: true, message: 'Data updated successfully' });

    } catch (error) {
        console.error('Error updating data:', error);
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
    }
}
