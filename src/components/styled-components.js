import styled from "@emotion/styled"

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 260px;
  max-width: 520px;
  height: 16rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);

  & > header {
    position: relative;
    z-index: 0;
    display: flex;
    height: 40%;
    overflow: hidden;
    & img {
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem 0.5rem 0 0;
      object-fit: cover;
    }
  }

  & > main {
    overflow: hidden;
    margin: 0;
    padding: 0;
    & h1 {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
    }
    & p {
      padding: 0.5rem;
      text-align: left;
    }
  }

  & > footer {
    position: absolute;
    bottom: 0;
    display: flex;
    width: calc(100% - 1rem);
    height: 2rem;
    padding: 0.5rem;
    justify-content: space-between;

    & button {
      margin: 0;
      padding: 0.3rem;
      font-size: 0.8rem;
      background-color: var(--primary-color);
      color: var(--secondary-color);
      &:only-child {
        margin-left: auto;
      }
    }
  }
`

export const StyledList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
