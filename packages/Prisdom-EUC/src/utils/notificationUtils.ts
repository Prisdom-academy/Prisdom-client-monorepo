import { NotificationTemplate } from 'models/notification';

export function getHighlightKeyword(
  templateString: NotificationTemplate
) {
  const strTemplateRegex = /(<<[\w\s-]+>>)/gi;
  const getKeywordOnlyRegex = /<<([\w\s-]+)>>/;
  const listKeywordWithTemplate = Array.from(
    templateString.matchAll(strTemplateRegex)
  ).map((regexArr) => regexArr[0]);
  const highlightKeywords: string[] = [];

  if (listKeywordWithTemplate) {
    listKeywordWithTemplate.forEach((kw) => {
      const kwOnly = kw.match(getKeywordOnlyRegex)?.[1];
      kwOnly && highlightKeywords.push(kwOnly);
    });
    return highlightKeywords;
  } else {
    throw new Error('Template notification is not a correct form!');
  }
}

export function getOriginalStringFromTemplate(
  templateString: NotificationTemplate
) {
  const regex = /<<([\w\s-]+)>>/;
  const allKeywords = getHighlightKeyword(templateString);
  let originalStr = templateString;

  allKeywords.forEach((kw) => {
    originalStr = originalStr.replace(regex, kw);
  });
  return {
    originalStr,
    highlightKeyword: allKeywords
  };
}
