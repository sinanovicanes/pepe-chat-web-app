"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

interface MessageProps {
  message: UserMessage;
  [key: string]: any;
}

export const ChatMessage = ({ message, className, ...props }: MessageProps) => {
  return (
    <Card className={`max-w-[50%] w-fit ${className}`} {...props}>
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="sm" src={message.user.avatar} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {message.user.username}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 pb-1 text-small text-default-400">
        <p>{message.message}</p>
      </CardBody>
    </Card>
  );
};
