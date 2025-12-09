import { describe, it, expect } from 'vitest'
import { tryWord } from './motus.js'

describe('tryWord', () => {
  
  it('devrait retourner toutes les lettres bien placées quand le mot est correct', () => {
    const result = tryWord('dictionnaire', 'dictionnaire')
    
    expect(result.wellPlaced).toHaveLength(12)
    expect(result.missplaced).toHaveLength(0)
    expect(result.notInWord).toHaveLength(0)
  })
  
  it('devrait ignorer la casse (majuscules/minuscules)', () => {
    const result = tryWord('DICTIONNAIRE', 'dictionnaire')
    
    expect(result.wellPlaced).toHaveLength(12)
  })
  
  it('devrait identifier les lettres bien placées', () => {
    const result = tryWord('dictionnaira', 'dictionnaire')
    
    expect(result.wellPlaced).toHaveLength(11)
    expect(result.wellPlaced).toContain('d')
    expect(result.wellPlaced).toContain('i')
  })
  
  it('devrait identifier les lettres mal placées', () => {
    const result = tryWord('aaaaaaaaaazz', 'dictionnaire')
    
    expect(result.wellPlaced).toContain('a') // Position 8 correcte
    expect(result.missplaced.length).toBeGreaterThan(0)
  })
  
  it('devrait identifier les lettres absentes du mot', () => {
    const result = tryWord('zzzzzzzzzzzz', 'dictionnaire')
    
    expect(result.notInWord).toHaveLength(12)
    expect(result.wellPlaced).toHaveLength(0)
    expect(result.missplaced).toHaveLength(0)
  })
  
  it('ne devrait pas mettre une lettre absente dans "mal placé"', () => {
    const result = tryWord('zzzzzzzzzzzz', 'dictionnaire')
    
    expect(result.missplaced).not.toContain('z')
  })
  
})