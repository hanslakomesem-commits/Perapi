export type IssueSeverity = 'info' | 'warning' | 'error';
export type RepairMode = 'safe' | 'total';
export type HeadingLevel = 0 | 1 | 2 | 3;

export interface DocIssue {
  id: string;
  title: string;
  detail: string;
  severity: IssueSeverity;
  count?: number;
}

export interface HeadingCandidate {
  paragraphIndex: number;
  text: string;
  level: HeadingLevel;
  confidence: number;
  reason: string;
  existingLevel?: HeadingLevel;
  chapter?: string;
}

export interface StructureInfo {
  frontMatter: string[];
  chapters: string[];
  bibliographyFound: boolean;
  appendixFound: boolean;
  tableCaptions: number;
  figureCaptions: number;
  likelyBlankParagraphs: number;
}

export interface AnalysisResult {
  fileName: string;
  sections: number;
  paragraphs: number;
  chapters: string[];
  subchapters: number;
  subSubchapters: number;
  hasNativeToc: boolean;
  hasTocHeading: boolean;
  hasPageFields: boolean;
  margins: Array<{ top: number; right: number; bottom: number; left: number }>;
  issues: DocIssue[];
  headingCandidates: HeadingCandidate[];
  structure: StructureInfo;
  validationScore: number;
}

export interface RepairOptions {
  mode: RepairMode;
  paper: 'A4' | 'F4';
  marginTopCm: number;
  marginRightCm: number;
  marginBottomCm: number;
  marginLeftCm: number;

  // 10 modul pilihan pengguna
  normalizeMargins: boolean;             // 1
  repairPageNumbering: boolean;          // 2
  createToc: boolean;                    // 3
  repairChapterPagination: boolean;      // 4
  repairHeadings: boolean;               // 5
  normalizeBodyFormatting: boolean;      // 6
  createTableList: boolean;              // 7
  createFigureList: boolean;             // 8
  cleanBlankParagraphs: boolean;         // 9
  validateDocument: boolean;             // 10

  removeLikelyManualToc: boolean;
  includeFrontMatterInToc: boolean;
  fontFamily: string;
  fontSizePt: number;
  lineSpacing: number;
  firstLineIndentCm: number;
  headingOverrides: Record<string, HeadingLevel>;
}

export interface RepairResult {
  blob: Blob;
  outputName: string;
  changes: string[];
  warnings: string[];
  analysisAfter: AnalysisResult;
}
