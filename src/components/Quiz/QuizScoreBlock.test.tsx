import { describe, expect, it } from "vitest";
import QuizScoreBlock from "./QuizScoreBlock";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('QuizScoreBlock', () => {
  it('Score Card Renders', () => {

    render(<QuizScoreBlock show = {true} percentScore={50}/>)

    const paragraph = screen.getByRole('paragraph')
    expect(paragraph).toBeInTheDocument()
    expect(paragraph).toHaveTextContent(/you scored a/i)
  })
})