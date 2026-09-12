export const classificationBasis = 'policy-direction-v1' as const;

export const stanceLabels = {
  zh: {
    oppose: '反对收紧',
    support: '支持收紧',
    mixed: '有条件／混合方向',
    unclear: '方向不明确／无法判断',
  },
  en: {
    oppose: 'Oppose tightening',
    support: 'Support tightening',
    mixed: 'Conditional / mixed direction',
    unclear: 'Unclear / unclassifiable direction',
  },
};

export const classificationNote = {
  zh: '按政策方向归类：支持包括赞同提案、对相关外籍用工或签证制度持明确负面态度，以及要求进一步收紧；反对包括反对限制、维护移民或工作许可、主张保留或放宽相关机会。不要求评论明确评价提案的具体条款。',
  en: 'Classified by policy direction: support includes endorsing the proposal, clearly negative views of the relevant foreign-worker or visa program, and calls for tighter restrictions. Opposition includes rejecting restrictions, defending migrants or work authorization, and preserving or expanding access. Explicit views on the proposal’s exact provisions are not required.',
};

export const classificationMethod = {
  zh: '逐条结合全文判断相关政策方向，不按赞成或反对等关键词机械分类。要求更高费用、更严限制或取消签证，归为支持收紧；支持保留或放宽工作与居留机会，归为反对收紧。对不同人群采取收紧与放宽并存的立场、或明确提出实质性支持条件，保留为有条件／混合。反对取消保障、仅把较短保障期作为退让方案的，仍归为反对收紧。仅有一般反欺诈表述，不会覆盖全文维护合法工作机会的主要方向。无关内容、纯咨询、无法判断方向的表述及不可读记录归为不明确。分类依据评论文字，不依据姓名或身份推断。附件不可读时保留说明，仅按可读正文判断；不会因观点或可读性替换样本。',
  en: 'Each full body is reviewed for its relevant policy direction, rather than classified by isolated words such as support or oppose. Demands for higher fees, tighter restrictions or visa abolition count as support for tightening; preserving or expanding work and residence opportunities counts as opposition. Scope-dependent combinations of tightening and easing, or explicit substantive conditions of support, remain conditional / mixed. Opposing the removal of protections while accepting shorter protections only as a fallback remains opposition. General anti-fraud language does not override an overall defense of lawful work access. Unrelated content, pure questions, indeterminate views and unreadable records remain unclear. Labels rely on the text, not names or identities. Unavailable attachments are disclosed and only readable bodies are assessed. No sample is replaced because of its viewpoint or readability.',
};
