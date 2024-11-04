import React from "react";
import { Percent } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface BoostedSelectProps {
  boosted: string;
  setBoosted: (value: string) => void;
}

const BoostedSelect: React.FC<BoostedSelectProps> = ({ boosted, setBoosted }) => {
  return (
    <div className='space-y-2'>
      <Label className='flex items-center gap-2'>
        <Percent className='w-4 h-4' />
        Boosted Listings?
      </Label>
      <Select
        value={boosted}
        onValueChange={setBoosted}
      >
        <SelectTrigger 
          className='border-primary/20 focus:border-primary'
          aria-label="Select boost option"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='no'>No</SelectItem>
          <SelectItem value='yes'>Yes</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BoostedSelect;
