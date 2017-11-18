export default graphql`
  query CurrentsPageQuery {
    allContentfulList(filter: { title: { eq: "Currents" } }) {
      edges {
        node {
          title
          description
          list
        }
      }
    }
  }
`;
