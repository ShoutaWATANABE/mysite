import type { Metadata } from "next";
import Link from "next/link";
import { Bilingual, Mail } from "./doc";

export const metadata: Metadata = {
  alternates: { canonical: "/gmailbar" },
};

export default function GmailBarHome() {
  return (
    <Bilingual
      updated={false}
      title={{ en: "GmailBar", ja: "GmailBar" }}
      en={
        <>
          <p>
            GmailBar is a macOS menu bar app that monitors unread mail across
            multiple Gmail accounts.
          </p>

          <h2>Features</h2>
          <ul>
            <li>
              Shows the number of unread messages and a list of them (sender,
              subject, and the short snippet returned by Gmail).
            </li>
            <li>
              Notifies you of new mail, with a notification sound you can choose
              per account.
            </li>
            <li>Marks messages as read, one at a time or all at once.</li>
            <li>
              Opens a message in Gmail using the Chrome profile assigned to that
              account.
            </li>
          </ul>

          <h2>How GmailBar uses Google data</h2>
          <p>
            For each account you choose either IMAP (with an app password) or
            the Gmail API. Only the Gmail API option uses Google sign-in, and it
            requests a single scope, <code>gmail.modify</code>, which is used to
            list unread messages in your inbox and to mark messages as read when
            you ask it to. GmailBar never sends, deletes, or drafts mail and
            never changes your Gmail settings.
          </p>
          <p>
            All data stays on your Mac. There is no developer server, and
            GmailBar talks only to Google. See the{" "}
            <Link href="/gmailbar/privacy">Privacy Policy</Link> for details.
          </p>

          <h2>Availability</h2>
          <p>
            GmailBar runs on macOS 27 or later on Apple silicon. It is a
            personal tool that the developer builds locally from source; it is
            not distributed on the App Store or elsewhere.
          </p>

          <h2>Contact</h2>
          <p>
            Shouta Watanabe — <Mail />
          </p>
          <p>
            <Link href="/gmailbar/privacy">Privacy Policy</Link> ·{" "}
            <Link href="/gmailbar/terms">Terms of Service</Link>
          </p>
        </>
      }
      ja={
        <>
          <p>
            GmailBar は、複数の Gmail
            アカウントの未読メールを見張る、macOS のメニューバーアプリです。
          </p>

          <h2>主な機能</h2>
          <ul>
            <li>
              未読の数と一覧（差出人、件名、Gmail が返す本文の冒頭）を表示します。
            </li>
            <li>新着メールを通知します。通知音はアカウントごとに選べます。</li>
            <li>メールを既読にします（1 通ずつ、またはまとめて）。</li>
            <li>
              メールは、そのアカウントに割り当てた Chrome のプロファイルで Gmail
              を開いて表示します。
            </li>
          </ul>

          <h2>Google のデータの使い方</h2>
          <p>
            メールの取得方法は、アカウントごとに IMAP（アプリパスワード）か Gmail
            API を選べます。Google のサインインを使うのは Gmail API
            方式だけで、要求するスコープは <code>gmail.modify</code> の 1
            つだけです。受信トレイの未読の一覧表示と、ユーザーの操作による既読化に使います。メールの送信・削除・下書きの作成や、Gmail
            の設定の変更は一切しません。
          </p>
          <p>
            データはすべてお使いの Mac
            の中にとどまります。開発者のサーバーはなく、通信先は Google
            だけです。詳しくは
            <Link href="/gmailbar/privacy">プライバシーポリシー</Link>
            をご覧ください。
          </p>

          <h2>対応環境と配布</h2>
          <p>
            macOS 27 以降（Apple
            シリコン）で動作します。開発者が個人で使うためにソースからローカルでビルドしているツールで、App
            Store などでは配布していません。
          </p>

          <h2>連絡先</h2>
          <p>
            渡邉将大 — <Mail />
          </p>
          <p>
            <Link href="/gmailbar/privacy">プライバシーポリシー</Link> ·{" "}
            <Link href="/gmailbar/terms">利用規約</Link>
          </p>
        </>
      }
    />
  );
}
