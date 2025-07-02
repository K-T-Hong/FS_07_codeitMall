import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      찾을 수 없는 페이지 입니다.
      <br />
      요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.
      <br />
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
