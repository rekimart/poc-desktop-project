import Avatar from '@tailus-ui/Avatar';
import DropdownMenu from '@tailus-ui/Dropdown';
import Button from '@tailus-ui/Button';
import { Check, ChevronUp, HelpCircle, LogOut, MessageCircleQuestion, Plus, Settings2, User } from 'lucide-react';
import { BERNARD_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from './../const';
import { useState } from 'react';
import { type AvatarFallbackProps } from '@tailus/themer';

const intents: AvatarFallbackProps['intent'][] = ['gray', 'primary', 'success', 'warning', 'danger', 'accent', 'secondary', 'info'];

const Account = ({ avatar, name, initial }: { avatar: string; name: string; initial: string }) => {
  const randomIntent = intents[Math.floor(Math.random() * intents.length)];

  return (
    <DropdownMenu.Item asChild>
      <DropdownMenu.RadioItem value={name} className="data-[state=checked]:text-primary-600 dark:data-[state=checked]:text-primary-400">
        <Avatar.Root className="size-4">
          <Avatar.Image src={avatar} alt={name} width={120} height={120} />
          <Avatar.Fallback intent={randomIntent} className="capitalize">
            {initial}
          </Avatar.Fallback>
        </Avatar.Root>
        {name}
        <DropdownMenu.ItemIndicator className="ml-auto">
          <DropdownMenu.Icon>
            <Check />
          </DropdownMenu.Icon>
        </DropdownMenu.ItemIndicator>
      </DropdownMenu.RadioItem>
    </DropdownMenu.Item>
  );
};

export const UserDropdown = () => {
  const [person, setPerson] = useState('Méschac Irung');

  const accounts = [
    { avatar: MESCHAC_AVATAR, name: 'Méschac Irung', initial: 'M' },
    { avatar: BERNARD_AVATAR, name: 'Bernard Ng', initial: 'B' },
    { avatar: THEO_AVATAR, name: 'Théo Balick', initial: 'T' },
  ];

  const selectedPerson = accounts.find((account) => account.name === person);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="ghost" intent="gray" className="w-full gap-2.5 pl-2">
          <Button.Icon>
            <Avatar.Root size="sm" className="!size-6">
              {selectedPerson && <Avatar.Image src={selectedPerson.avatar} alt={selectedPerson.name} />}
              {selectedPerson && <Avatar.Fallback>{selectedPerson.initial}</Avatar.Fallback>}
            </Avatar.Root>
          </Button.Icon>
          <Button.Label className="text-sm">{selectedPerson && selectedPerson.name}</Button.Label>
          <Button.Icon type="trailing" size="sm" className="ml-auto">
            <ChevronUp />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          mixed
          align="center"
          sideOffset={6}
          intent="gray"
          variant="soft"
          className="z-50 w-[--radix-dropdown-menu-trigger-width] dark:[--caption-text-color:theme(colors.gray.400)]"
        >
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            {accounts.map((account, index) => (
              <Account {...account} key={index} />
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Item asChild>
            <a href="/examples/forms/register1">
              <DropdownMenu.Icon>
                <Plus />
              </DropdownMenu.Icon>
              Add new account
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item asChild>
            <a href="#">
              <DropdownMenu.Icon>
                <Settings2 />
              </DropdownMenu.Icon>
              Preferences
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item asChild>
            <a href="#">
              <DropdownMenu.Icon>
                <HelpCircle />
              </DropdownMenu.Icon>
              Help
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a href="#">
              <DropdownMenu.Icon>
                <MessageCircleQuestion />
              </DropdownMenu.Icon>
              Send feedback
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item asChild>
            <a href="#">
              <DropdownMenu.Icon>
                <User />
              </DropdownMenu.Icon>
              My Account
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LogOut />
            </DropdownMenu.Icon>
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
