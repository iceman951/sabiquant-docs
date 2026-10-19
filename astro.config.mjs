import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // Served from the root of a custom domain on Cloudflare (no sub-path `base`).
  site: 'https://sabiquant.icerust.dev',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'SabiQuant',
      description: 'High-integrity, std-only Quantitative Finance library in Rust',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        th: {
          label: 'ไทย',
          lang: 'th',
        },
      },
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: [
        'katex/dist/katex.min.css',
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/iceman951/sabiquant',
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { th: 'เริ่มต้นใช้งาน' },
          items: [
            {
              label: 'Overview & Philosophy',
              translations: { th: 'ภาพรวมและปรัชญา' },
              slug: 'getting-started/overview',
            },
            {
              label: 'Installation & Quickstart',
              translations: { th: 'การติดตั้งและเริ่มต้น' },
              slug: 'getting-started/installation',
            },
          ],
        },
        {
          label: 'Fixed Income & Bonds',
          translations: { th: 'ตราสารหนี้และพันธบัตร' },
          items: [
            {
              label: 'Pricing & Valuation',
              translations: { th: 'การประเมินราคาและการคิดมูลค่า' },
              slug: 'bonds/pricing-and-risk',
            },
            {
              label: 'Yield to Maturity Inversion',
              translations: { th: 'การคำนวณผลตอบแทน (YTM Inversion)' },
              slug: 'bonds/yield-to-maturity',
            },
            {
              label: 'Risk Analytics',
              translations: { th: 'การวิเคราะห์ความเสี่ยง (Duration & Convexity)' },
              slug: 'bonds/risk-analytics',
            },
          ],
        },
        {
          label: 'Core Financial Foundations',
          translations: { th: 'รากฐานทางการเงินหลัก' },
          items: [
            {
              label: 'Dates & Periods',
              translations: { th: 'วันที่และช่วงเวลา' },
              slug: 'foundations/dates-and-periods',
            },
            {
              label: 'Market Calendars & Conventions',
              translations: { th: 'ปฏิทินตลาดและข้อตกลงวันทำการ' },
              slug: 'foundations/calendars',
            },
            {
              label: 'Day-Count Conventions',
              translations: { th: 'ข้อตกลงการนับวัน (Day-Count)' },
              slug: 'foundations/day-count',
            },
            {
              label: 'Interest Rates & Compounding',
              translations: { th: 'อัตราดอกเบี้ยและการคิดทบต้น' },
              slug: 'foundations/rates-and-compounding',
            },
          ],
        },
        {
          label: 'Schedules & Cashflows',
          translations: { th: 'ตารางการจ่ายและกระแสเงินสด' },
          items: [
            {
              label: 'Schedule Generation',
              translations: { th: 'การสร้างตารางเวลา' },
              slug: 'schedules/schedule-generation',
            },
            {
              label: 'Cashflows & Legs',
              translations: { th: 'กระแสเงินสดและสัญญา' },
              slug: 'schedules/cashflows-and-legs',
            },
          ],
        },
        {
          label: 'Exact Money & Settlement',
          translations: { th: 'ระบบเงินและขอบเขตการชำระราคา' },
          items: [
            {
              label: 'Exact Decimal',
              translations: { th: 'ทศนิยมความละเอียดสูง' },
              slug: 'exact-money/exact-decimal',
            },
            {
              label: 'Settlement Boundary',
              translations: { th: 'ขอบเขตการชำระราคา' },
              slug: 'exact-money/settlement',
            },
          ],
        },
        {
          label: 'Mathematics & Numerics',
          translations: { th: 'คณิตศาสตร์และการคำนวณเชิงตัวเลข' },
          items: [
            {
              label: '1D Solvers',
              translations: { th: 'ตัวแก้สมการ 1 มิติ' },
              slug: 'mathematics/solvers',
            },
            {
              label: 'Interpolation',
              translations: { th: 'การประมาณค่าในช่วง' },
              slug: 'mathematics/interpolation',
            },
            {
              label: 'Normal Distribution',
              translations: { th: 'การแจกแจงแบบปกติ' },
              slug: 'mathematics/normal-distribution',
            },
          ],
        },
        {
          label: 'Resources',
          translations: { th: 'แหล่งข้อมูล' },
          items: [
            {
              label: 'Crates.io Package',
              translations: { th: 'แพ็กเกจบน Crates.io' },
              link: 'https://crates.io/crates/sabiquant',
              attrs: { target: '_blank', rel: 'noopener noreferrer' },
            },
            {
              label: 'SabiQuant Source Code',
              translations: { th: 'ซอร์สโค้ด SabiQuant' },
              link: 'https://github.com/iceman951/sabiquant',
              attrs: { target: '_blank', rel: 'noopener noreferrer' },
            },
          ],
        },
      ],
    }),
  ],
});
