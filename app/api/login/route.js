import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        const body = await request.json();
        const { password } = body;

        let envPass = process.env.ADMIN_PASSWORD;
        const secret = process.env.JWT_SECRET || 'fallback-secret-for-local';

        if (!password) {
            return NextResponse.json({ error: 'Password missing' }, { status: 400 });
        }

        if (process.env.ENABLE_ADMIN !== 'true') {
            console.error('[API LOGIN ERROR] Admin access is disabled by ENABLE_ADMIN environment variable.');
            return NextResponse.json({ error: 'Admin access is disabled on this environment' }, { status: 403 });
        }

        if (!envPass) {
            console.error('[API LOGIN ERROR] ADMIN_PASSWORD is not set in .env.local');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        envPass = envPass.replace(/^['"]|['"]$/g, '').trim();

        if (password !== envPass) {
            console.error('[API LOGIN ERROR] Incorrect password.');
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        console.log('[API LOGIN] SUCCESS - Issuing JWT');

        const token = jwt.sign({ role: 'admin' }, secret, { expiresIn: '24h' });
        return NextResponse.json({ success: true, token });

    } catch (error) {
        console.error('[API LOGIN ERROR] Unexpected crash:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
