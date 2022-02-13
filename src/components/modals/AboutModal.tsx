import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          open source</a>
        version of the word guessing game we all know and
        love, adapted to feature the names of musical artists.      
        Answers are either their first or last name. Good luck!
      </p>
    </BaseModal>
  )
}
