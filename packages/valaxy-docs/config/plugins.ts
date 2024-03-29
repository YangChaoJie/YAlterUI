import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import { highlight } from './highlight'

const localMd = MarkdownIt()
const docRoot = '../play/src/'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}


export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        console.log('path.resolve(docRoot)-----', path.resolve(docRoot, 'example', `${sourceFile}.vue`),);
        
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, 'example', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        // console.log('sourceFile-----------',  sourceFile);
        // :demos="demos" 
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Usage source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      } else {
        return '</Usage>'
      }
    },
  } as ContainerOpts)
}
