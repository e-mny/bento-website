import React from "react";
import { twMerge } from 'tailwind-merge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BaseBlockProps = {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  additionalClasses?: string;
};

export class BaseBlock extends React.Component<BaseBlockProps> {
  render() {
    const { title = "", content, footer, additionalClasses = "" } = this.props;
    const newClassName = twMerge("flex flex-col items-center justify-center aspect-w-1 aspect-h-1 min-h-[200px]", additionalClasses)

    return (
      <div className={newClassName}>
        <Card className="">
        <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-4xl tabular-nums">
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">{title.toUpperCase()}</span> BLOCK</CardTitle>
          </CardHeader>

          <CardContent>
            <>{content}</>
          </CardContent>

          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              <>{footer}</>
            </CardDescription>

          </CardFooter>
        </Card>
      </div>
    );
  }
}
