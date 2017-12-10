import Link from 'next/link'

const prettyJSON = obj => JSON.stringify(obj, null, '\t')

export default ({ data, error, isFetching, listForum }) => {
  return (
    <div>
      <button onClick={listForum}>Fetch Forums</button>
      {isFetching ? <p>Loading...</p> : ''}
      <br/>
      {data && data.length && data.map((forum, key) => (
        <Link
          as={forum.alias === 'all' ? '/' : `/forum/${forum.alias}`}
          href='/forum'
          key={key}>
          <a>{forum.name}</a>
        </Link>
      ))}
      {error ? <div><b>ERROR</b><br/><pre>{prettyJSON(error)}</pre></div> : ''}
    </div>
  )
}
