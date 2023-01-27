import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  HomeContainer,
  MinutesAmountInput,
  Questions,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <Questions>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="tasks-suggestions"
          />

          <datalist id="tasks-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="0"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </Questions>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
