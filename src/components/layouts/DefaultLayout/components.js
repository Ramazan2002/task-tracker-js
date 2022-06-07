import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: papayawhip;
  text-align: center;
  height: 100vh;
  width: 100%;
  //display: flex;
  //flex-direction: row;
`

export const PageContent = styled.div`
  align-items: start;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  ::-webkit-scrollbar-thumb {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background: gray;
  }
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background-color: #1a1c1e;
  }
`
