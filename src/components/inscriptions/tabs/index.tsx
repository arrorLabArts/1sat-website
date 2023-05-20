import React from "react";
import * as S from "./styles";
interface Props {
  currentTab: Tab | undefined;
  showIndicator?: boolean;
  onClickSelected?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export enum InscriptionTab {
  Image = "image",
  BSV20 = "bsv20",
  Text = "text",
}

const InscriptionTabs: React.FC<Props> = ({
  currentTab,
  showIndicator,
  onClickSelected,
}) => {
  return (
    <S.Tabs className="max-w-7xl mx-auto my-8">
      <S.Tab
        partiallyactive={currentTab === InscriptionTab.Image ? "true" : "false"}
        href={`/inscribe?tab=image`}
        onClick={(e) =>
          currentTab === InscriptionTab.Image && onClickSelected
            ? onClickSelected(e)
            : () => {}
        }
      >
        Image
      </S.Tab>
      <S.Tab
        partiallyactive={currentTab === InscriptionTab.Text ? "true" : "false"}
        href={`/inscribe?tab=text`}
        onClick={(e) =>
          currentTab === InscriptionTab.Text && onClickSelected
            ? onClickSelected(e)
            : () => {}
        }
      >
        Text
      </S.Tab>
      <S.Tab
        partiallyactive={currentTab === InscriptionTab.BSV20 ? "true" : "false"}
        href={`/inscribe?tab=bsv20`}
        onClick={(e) =>
          currentTab === InscriptionTab.BSV20 && onClickSelected
            ? onClickSelected(e)
            : () => {}
        }
      >
        BRC-20
      </S.Tab>
    </S.Tabs>
  );
};

export default InscriptionTabs;
