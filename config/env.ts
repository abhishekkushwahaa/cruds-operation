class Env {
  static SMTP_HOST: string = process.env.SMTP_HOST!;
  static SMTP_PORT: number = parseInt(process.env.SMTP_PORT!);
  static SMTP_USER: string = process.env.SMTP_USER!;
  static SMTP_PASSWORD: string = process.env.SMTP_PASSWORD!;
  static SMTP_SECURE: string = process.env.SMTP_SECURE!;
  static SMTP_FROM: string = process.env.EMAIL_FROM!;
  static SMTP_TO: string = process.env.EMAIL_TO!;
  static SECRET_KEY: string = process.env.NEXTAUTH_SECRET!;
  static APP_URL: string = process.env.NEXTAUTH_URL!;
}

export default Env;
