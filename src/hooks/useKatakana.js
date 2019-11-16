import { useStaticQuery, graphql } from 'gatsby';

export const useKatakana = () => {
  const { allKatakanaJson } = useStaticQuery(graphql`
    query {
      allKatakanaJson {
        nodes {
          id
          column
          letter
          row
          set
          symbol
          table
        }
      }
    }
  `);
  return allKatakanaJson;
};
