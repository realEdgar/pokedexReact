export const Stat = ({el}) => {
  return (
    <li key={el.stat.name}>
      <b>{el.stat.name}</b> <span>{el.base_stat}</span>
    </li>
  )
}