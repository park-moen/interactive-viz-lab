import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">페이지를 찾을 수 없어요.</p>
      <Link
        to="/"
        className="
          text-primary
          hover:underline
        "
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
