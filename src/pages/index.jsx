import * as React from "react"
import { graphql } from "gatsby"
import Banner from "../../components/Banner"
import SectionToAction from "../../components/SectionToAction";

const filterSection = s => Object.keys(s).length

function Home ({ data }) {
  const page = data.prismicAbout.data;
  const sections = page.callToActions.filter(filterSection);

  console.log('page', page);
  return (
    <main>
      <Banner title={page.title?.raw} />
      <section>
        {
          sections.map(({id, primary}) => (
            <SectionToAction
              key={id}
              title={primary.title.text}
              paragraph={primary.paragraph.raw}
              buttonLabel={primary.button_label}
              buttonLink={primary.button_link.url}
              iconImage={primary.icon_image.fluid}
            />
          ))
        }
      </section>
    </main>
  )
}

export const query = graphql`
  query HomePageQuery {
    prismicAbout(uid: {eq: "home"}) {
      data {
        callToActions: body {
          ... on PrismicAboutDataBodyCallToAction {
            id
            slice_type
            primary {
              button_label
              button_link {
                url
              }
              icon_image {
                fluid {
                ...GatsbyPrismicImageFluid
                }
              }
              paragraph {
                html
                raw
                text
              }
              title {
                html
                raw
                text
              }
            }
          }
        }
        title {
          html
          text
          raw
        }
      }
    }
  }
`

export default Home
