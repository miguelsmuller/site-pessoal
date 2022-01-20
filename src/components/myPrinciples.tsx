import React from 'react'
import styled from 'styled-components'

import Title from './title'
import GuidelinesContent, {
  GuidelinesType
} from '../services/mocks/guidelines.items'

// Responsável pela organização seção
const Container = styled.section`
  padding-top: ${6 * 8}px;
  padding-bottom: ${7 * 8}px;

  @media (min-width: 1280px) {
    padding-bottom: ${16 * 8}px
  }
`
const Row = styled.div`
  gap: ${4 * 8}px;
  padding: ${4 * 8}px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center;
`
const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &.minWidth{
    min-width: 335px;
  }
`

// Responsável pelo Grid
const GridOfCells = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${3*8}px;
  width: 100%;

  .firstCollection{
    gap: ${3*8}px;
    display: flex;
    min-width: 375px;
    flex-wrap: wrap;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const Card = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.lightGray};
  border: 1px solid ${props => props.theme.colors.gray};
  padding: ${3*8}px ${2*8}px;
  min-width: 375px;

  h2{
    font-size: 18px;
    font-weight: ${props => props.theme.weight.extraBold};
    padding-bottom: ${2 * 8}px;
  }
`

export default function Guidelines() {
  const content: GuidelinesType = GuidelinesContent()

  return (
    <Container className="container">
      <Title text="Por que eu faço?" />
      <Row>
        <Cell>
          <GridOfCells>
            <div className='firstCollection'>
              <Card className="shadow">
                <h2>Missão</h2>
                {content.mission}
              </Card>
              <Card className="shadow">
                <h2>Visão</h2>
                {content.vision}
              </Card>
            </div>

            <Card className="shadow">
              <h2>Valores</h2>
              {content.values}
            </Card>
          </GridOfCells>
        </Cell>

        <Cell className="minWidth" dangerouslySetInnerHTML={{ __html: content.introduction }}></Cell>
      </Row>
    </Container>
  )
}
