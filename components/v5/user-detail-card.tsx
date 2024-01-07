import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { getUserDetail } from "@/components/v5/apis";

export async function UserTwitterCard({ id }: { id: string }) {
  const detail = await getUserDetail(id);

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`https://i.pravatar.cc/150?u=${detail.id}`}
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {detail.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              {detail.twitter}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">{detail.bio}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            <Link href={detail.homepage}>{detail.homepage}</Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default UserTwitterCard;
