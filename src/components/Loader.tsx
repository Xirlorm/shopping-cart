import styled, { keyframes } from "styled-components"

const tileStyle = `
  background: #000;
  width: 8px;
  height: 8px;
`

const animation = keyframes`
  50% {
    transform: translateY(20px) rotate(270deg  );
    background: transparent;
  }
  20% {
    transform: scale(1.2);
  }
  from, to {
    transform: translateY(-20px);
  }
`

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 0.8em;
  items-align: center;
  padding: 2em 1.4em;
  background: transparent;
  perspective: 20px;
`

const Tile1 = styled.div`
  ${tileStyle}
  animation: ${animation} linear 1.3s infinite .3s;
`

const Tile2 = styled.div`
  ${tileStyle}
  animation: ${animation} linear 1.3s infinite .6s;
`

const Tile3 = styled.div`
  ${tileStyle}
  animation: ${animation} linear 1.3s infinite .9s;
`

function Loader() {
  return (
    <Container>
      <Tile1 />
      <Tile2 />
      <Tile3 />
    </Container>
  )
}

export default Loader
