import Main from 'components/Main'

type Props = {
  title: string
}

export default function Home({ title = "Advanced React" }: Props) {
  return (
    <Main />
  )
}
