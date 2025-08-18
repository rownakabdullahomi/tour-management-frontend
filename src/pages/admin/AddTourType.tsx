import { useGetTourTypesQuery } from "@/redux/features/tour/tour.api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function AddTourType() {
  const { data } = useGetTourTypesQuery(undefined);
  console.log(data);

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="border border-muted rounded-b-md">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: { name: string }) => (
              <TableRow>
                <TableCell className="font-medium w-full">{item?.name}</TableCell>
                <TableCell className="font-medium">
                  <Button size={"sm"}>
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
