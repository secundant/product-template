import { Button } from '@my-org/react-ui/button';

export function PageView() {
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-2">
      <Button size="sm">Hello</Button>
      <Button size="md">Hello</Button>
      <Button size="lg">Hello</Button>
    </div>
  );
}
