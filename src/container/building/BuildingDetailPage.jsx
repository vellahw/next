function BuildingDetailPage(props) {
  console.log(props)
  
    return(
        <section style={{height: '560px'}}>
            <h1 style={{paddingTop: '200px'}}>상세보기`~ {content}</h1>
        </section>
    )
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://zik-tu.vercel.app/building/${params.no}`)
    const content = await res.json()

    if (!content) {
      return {
        notFound: true,
      }
    }
    
    return { props: {content} }
}

export default BuildingDetailPage