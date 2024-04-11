import React from "react";
import Link from "next/link";
interface Props {
  title: string;
  href: string;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CourseCard = ({ title, href }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={href}>{title}</Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CourseCard;
