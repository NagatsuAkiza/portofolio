import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CardLayoutProps {
  title: string;
  description: string;
}

const CardLayout = ({ title, description }: CardLayoutProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardLayout;
