import { Container } from "../ui/container";
import { MyTime } from "../ui/my-time";

export const FooterSection = () => {
  return (
    <div className="grid grid-cols-3 gap-3 text-muted-foreground text-xs border-t py-6">
      <div>
        <p>My Time</p>
        <p className="text-sm">
          <MyTime />
        </p>
      </div>
      <div>
        <p>Proudly built with</p>
        <p>Next.js</p>
      </div>
      <div>
        <p>Template inspired by</p>
        <p>Dark.Design</p>
      </div>
    </div>
  );
};
