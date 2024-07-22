import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import i18n from 'i18next'
import { useApp } from '@/state/app'
import { LanguageIcon } from '@/components/Icons/LanguageIcon'

const languageOptions: { id: LanguageType, name: string }[] = [
  { id: 'en', name: 'English' },
  { id: 'zh', name: ' 中文 ' },
]

export const Language = () => {
  const { updateLanguage, language } = useApp()
  const [selected, setSelected] = useState(languageOptions[0])
  useEffect(() => {
    const selected = languageOptions.find(option => option.id === language) ?? languageOptions[0]
    setSelected(selected)
  })
  const handleLanguageChange = (id: LanguageType) => {
    i18n.changeLanguage(id)
    updateLanguage(id)
  }
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={classNames(
          'relative block w-full rounded-lg bg-white/5 dark:bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-black/60',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
        )}
      >
        <LanguageIcon className="w-6 h-6" />
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60 dark:fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={classNames(
          'w-[130px] rounded-xl border border-white/5 bg-black dark:bg-black p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0',
        )}
      >
        {languageOptions.map(language => (
          <ListboxOption
            key={language.name}
            value={language}
            className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/30 group-data-[selected]:bg-white/30"
            onClick={() => handleLanguageChange(language.id)}
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-white text-sm/6">{language.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
