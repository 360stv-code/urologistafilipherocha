# Site Dr. Filiphe Rocha — Urologia e Saúde do Homem

Site estático, rápido, com SEO + AEO completos. Pronto para subir no Git.

## Deploy (GitHub Pages)
1. Crie um repositório e suba todos os arquivos na raiz.
2. Settings → Pages → Branch `main` / `root` → Save.
3. Aponte o domínio `urologistafilipherocha.com.br` (CNAME) para o GitHub Pages.

## Configurar após publicar
- **Google Search Console**: adicionar propriedade e enviar `sitemap.xml`.
- **Bing Webmaster**: adicionar e enviar sitemap.
- **IndexNow**: gerar chave e adicionar para indexação instantânea.
- **Microsoft Clarity**: colar o script antes de `</body>` em todas as páginas.
- **Google Business Profile**: cadastrar o consultório (Vila Mariana) — essencial para SEO local.

## Estrutura
- `index.html` — home (Schema Physician + MedicalClinic + FAQPage + speakable)
- `tratamento-fimose-sao-paulo.html` — página-chave (MedicalWebPage + FAQ + breadcrumb)
- `sobre.html` — E-E-A-T (formação, autoridade)
- `blog/` — índice + 1º artigo; adicione 1 post/semana
- `llms.txt`, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `404.html`

## Conformidade CFM 2.336/2023
- CRM-SP 193220 no rodapé, header e Schema de todas as páginas.
- Sem promessa de resultado, sem preços, sem antes/depois.
- Linguagem "médico com atuação em" (sem título de especialista, pois sem RQE).

## Novos artigos
Duplique `blog/o-que-e-fimose.html`, troque conteúdo + Schema, e adicione a URL no `sitemap.xml` e no índice do blog.
