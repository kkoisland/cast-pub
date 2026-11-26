---
id: 0007-notes
title: AIエージェントとは何か（調査メモ）
publishedAt: 2026-11-25
category: ai
published: false
---

# 名前の由来（記事から省いた詳細）

AI研究では1980年代から「エージェント」という言葉が使われていた（ミンスキーの『心の社会(The Society of Mind)』1986年など）。1990年代に広まり、1995年に出版されたラッセル(Stuart Russell)とノービグ(Peter Norvig)の教科書『エージェントアプローチ人工知能(Artificial Intelligence: A Modern Approach)』で「エージェントとは、環境を知覚し、行動する存在」として正式に定義された。この教科書は今も世界中の大学で使われている。

---

# 下調べメモ（記事執筆の元）

AIエージェントという言葉が一般的に呼ばれるようになったのはわりと最近のこと、2025年です。

2023年は、開発者、研究者、AI好きの人たちの間で、「自律型エージェント(autonomous agent)」と呼ばれ、2024年になると開発者、企業間では「エージェンティック(agentic)」という言葉が広まっていきました。

AIエージェントができるまでの流れは以下の通りです。
## ChatGPTの公開(2022年)
LLMが広く一般に知られるようになりました。2022年11月30日、OpenAIがChatGPTを公開。LLMは文章を返すだけで、外の世界には何もできなかった。その後、GoogleのBard、MetaのLLaMA、AnthropicのClaude、OpenAIのGPT-4が、2023年2〜3月に相次いで登場した。

## ループの考え方が登場
手順を人間があらかじめコードで固定しておくワークフローとは違い、LLMが「考える → 行動 → 観察」を繰り返し、目的を達成するまで次の一手を自分で決め続ける。この形を早い時期に一般に見せたのがAuto-GPTだが、当時のモデルの性能では実用には届かなかった。

## Function calling(2023年)
LLMが外側のプログラムが実行する指示を出せるようになった。OpenAIとGoogleがfunction calling、2024年には、Anthropicがtool use、MetaがTool calling。Llama 3.1ではモデル自体に組み込まれ、オープンなモデルでも使えるようになった。

## 画面操作(2024〜2025年)
LLMがスクリーンショットを見てクリックや入力を指示し、外側のプログラムは、人間と同じ画面から操作できるようになる。2024年10月22日にAnthropicが公開したcomputer useでは、画面の確認、カーソル移動、クリック、文字入力ができるようになった。

## MCP(2024年〜)
MCP(Model Context Protocol)は、AIと外部の道具をつなぐ方法を統一する規格だ。2024年11月にAnthropicがオープンソース化し、その後Microsoft Copilot、ChatGPT、Geminiも採用した。

## 製品化(2025年〜)
2025年は、エージェントが実験から製品になった年。AnthropicはClaude CodeとClaude in Chrome、MicrosoftはGitHub Copilot coding agent、GoogleはProject MarinerとJules、OpenAIはChatGPT agentとCodex。

---

AIエージェントについては、以下のようなことが注目されました。

## 1. ブラウザやパソコン全体を操作するようになった
エージェントがブラウザやパソコンの画面を読み取り、ユーザーの代わりにクリック、文字の入力、スクロール、タブの切り替えなどの操作ができるようになった。店を探して予約する、フォームに入力する、複数のサイトを開いて比べる、といった作業ができるようになった。

## 2. 1つのエージェントから「チーム」へ
1つのエージェントに全部やらせるのではなく、複数のエージェントに分担させる方法が広がりました。代表例は、2026年2月5日にClaude Opus 4.6と同時に出た、Claude CodeのAgent Teamsです。これはリーダー役のエージェント1体が全体を取りまとめ、メンバーのエージェントがそれぞれ独立して作業し、共有のタスクリストで進み具合を管理する仕組みです。

業界でも、2025年がAIエージェントの年なら、2026年はマルチエージェントシステムの年になるという見方が出ていました。

## 3. ハーネス(外側のプログラム)を提供元が引き受けるようになった
エージェントを動かす仕組みまで、まるごとクラウドで任せられるようになった。それまでは、モデルはクラウドにあるが、エージェントとして動かす仕組み(ループ、実行環境、状態の保存など)は、企業が自分で作って自分のサーバーで動かしていた。2023年のOpenAIから始まり、2025年にクラウド各社が、2026年にAnthropicが参入した。Anthropicは2026年4月8日、Claude Managed Agentsを公開。最初の利用企業には、Notion、楽天、Asanaなどが含まれていました。

各社の主なサービス:OpenAIはAssistants API(現在は後継のResponses API)、MicrosoftはMicrosoft Foundry Agent Service(旧Azure AI Foundry Agent Service)、GoogleはVertex AI Agent Engine、AmazonはAmazon Bedrock AgentCore、AnthropicはClaude Managed Agents。

## 4. 規格が中立的な団体に移った
2025年12月に、MCPがLinux Foundation傘下のAgentic AI Foundationに寄贈されました。エージェント同士をつなぐA2Aも、Linux Foundationで開発が続いています。エージェントの身元を暗号で確認できる「Signed Agent Cards」の導入など、本番運用に向けた改良が進んでいます。

## 5. 安全性が大きな課題になった
2026年8月、オーストラリア放送協会(ABC)が報じた出来事。メルボルンの男性アンドリュー(Andrew)が、Claudeで動くオープンソースのエージェント「OpenClaw(オープンクロー)」にジムのクラス予約を頼んだ。キャンセル待ちの順番を上げられないかと聞くと、エージェントは指示されていないのに、予約システムのAPIで1位の利用者の予約を取り消した。順番は4位から3位に上がり、取り消した予約は元に戻せなかった。ジム側のシステムが予約者本人かどうかを確認しない設計だったことと、エージェントが頼まれていない操作を自分の判断で実行したことが重なった結果。
出典: ibtimes / ABCニュース 2026年8月10日
