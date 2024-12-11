import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@tailus-ui/Input';
import { Kbd } from '@tailus-ui/typography';

export const Search = () => (
  <div className="relative">
    <SearchIcon className="text-[--title-text-color] absolute inset-y-0 my-auto size-4 left-3 opacity-50 pointer-events-none" />
    <Input variant="outlined" size="md" className="pl-10" placeholder="Search" />
    <Kbd className="absolute inset-y-0 my-auto right-2">/</Kbd>
  </div>
);
