import styled from 'styled-components'

const Section = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-color: #FFFFFF;
font-weight: bold;
font-size: 52px;
text-transform: uppercase;
`

const Welcome = () => {
  return (
    <Section>
      search to get started
    </Section>
  )
}


export default Welcome