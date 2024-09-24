const ja_JP = {
  user: {
    title: "ユーザー管理",
    search_placeholder: "ユーザー名、メール、または電話",
    create: "ユーザーを作成",
    edit: "ユーザーを編集",
    busi_groups: "ビジネスグループ",
    user_groups: "チーム",
    last_active_time: "最後のアクティブ時間",
  },
  team: {
    title: "チーム管理",
    list: "チームリスト",
    search_placeholder: "ユーザー名、表示名、メール、または電話",
    create: "チームを作成",
    edit: "チームを編集",
    add_member: "メンバーを追加",
    empty: "関連するチームがありません。まず",
    name: "チーム名",
    add_member_selected: "選択された {{num}} 項",
  },
  business: {
    title: "ビジネスグループ管理",
    list: "ビジネスグループ",
    search_placeholder: "ビジネス名",
    team_search_placeholder: "チーム名で検索",
    create: "ビジネスグループを作成",
    edit: "ビジネスグループを編集",
    add_team: "チームを追加",
    perm_flag: "権限",
    note_content:
      "アラートルール、アラートイベント、監視対象、自己修復スクリプトなどはすべてビジネスグループに属し、システム内で自己完結する組織です",
    empty:
      "ビジネスグループ（監視対象、監視ダッシュボード、アラートルール、自己修復スクリプトはすべてビジネスグループに属する必要があります）が空です。まず",
    name: "ビジネスグループ名",
    name_tip:
      "\n      {{separator}} で区切られた後、ツリースタイルでレンダリングされます <1 />\n      例えば、redis{{separator}}監控 と redis{{separator}}ログイン は以下のように表示されます <1 />\n      redis <1 />\n      - 監控 <1 />\n      - ログイン <1 />\n    ",
    team_name: "チーム",
    perm_flag_0: "読み取りのみ",
    perm_flag_1: "読み取り/書き込み",
    user_group_msg: "ビジネスグループのチームは空できません",
  },
  disbale: "無効",
  enable: "有効",
  ok_and_search: "確定して検索",
};

export default ja_JP;
