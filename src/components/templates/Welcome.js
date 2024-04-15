import styled from 'styled-components'

const Section = styled.div`
width: 100%;
height: calc(100vh - 60px);
display: flex;
justify-content: center;
align-items: center;
font-color: #FFFFFF;
font-weight: bold;
font-size: 52px;
text-transform: uppercase;
`

/**
 * Displays a simple welcome message within a <Section> component.
 *
 * This stateless functional component is designed to provide a straightforward prompt to users when they first
 * interact with the application. It encourages users to start interacting with the application by initiating a search.
 */

const Welcome = () => {
  return (
    <Section>
      search to get started
    </Section>
  )
}


export default Welcome