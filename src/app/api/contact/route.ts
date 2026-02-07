import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const isValidEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export async function POST(request: Request) {
    try {
        if (!resend) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'メール送信機能が未設定です。管理環境を確認してください。' },
                { status: 503 }
            );
        }

        const { firstName, lastName, email, message } = await request.json();

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: '全項目を入力してください。' }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: '有効なメールアドレスを入力してください。' }, { status: 400 });
        }

        const result = await resend.emails.send({
            from: 'CWG Website <onboarding@resend.dev>',
            to: 'gensgpt2025@gmail.com',
            subject: `【お問い合わせ】${firstName} ${lastName}様より`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #c5a059; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">新着お問い合わせ</h2>
          <p style="margin-top: 20px;"><strong>お名前:</strong> ${firstName} ${lastName} 様</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>お問い合わせ内容:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888;">CWG Website Contact System</p>
        </div>
      `,
        });

        if (result.error) {
            console.error('Resend service error:', result.error);
            const resendError = result.error as any;
            let errorMessage = 'メッセージの送信に失敗しました。';

            if (resendError.name === 'forbidden' || resendError.statusCode === 403) {
                errorMessage = '【運用制限】ResendのSandboxモードにより、登録済みアドレス以外への送信が制限されています。';
            }

            return NextResponse.json({ success: false, error: errorMessage }, { status: resendError.statusCode || 400 });
        }

        return NextResponse.json({ success: true, data: result.data });
    } catch (error) {
        console.error('Fatal internal error during mail submission:', error);
        return NextResponse.json({ error: '通信エラーが発生しました。時間をおいて再度お試しください。' }, { status: 500 });
    }
}
