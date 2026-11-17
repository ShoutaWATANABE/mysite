import type { Metadata } from "next";
import { Bilingual, Mail } from "../doc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/gmailbar/privacy" },
};

const scope = "https://www.googleapis.com/auth/gmail.modify";
const permissionsUrl = "https://myaccount.google.com/permissions";
const userDataPolicyUrl =
  "https://developers.google.com/terms/api-services-user-data-policy";

export default function GmailBarPrivacy() {
  return (
    <Bilingual
      title={{ en: "Privacy Policy", ja: "プライバシーポリシー" }}
      en={
        <>
          <p>
            This Privacy Policy explains how GmailBar (&quot;the app&quot;), a
            macOS menu bar app developed by Shouta Watanabe, accesses, uses,
            stores, and shares your data.
          </p>

          <h2>Google user data the app accesses</h2>
          <p>
            When you add an account using the Gmail API option, the app asks for
            a single OAuth scope: <code>{scope}</code>. It does not request the{" "}
            <code>openid</code>, <code>email</code>, or <code>profile</code>{" "}
            scopes. The app accesses the following data:
          </p>
          <ul>
            <li>
              For unread messages in your inbox: message ID, thread ID, sender,
              subject, date, the short snippet returned by Gmail, labels, and
              history ID.
            </li>
            <li>The email address of the signed-in account.</li>
          </ul>

          <h2>How the app uses this data</h2>
          <ul>
            <li>
              To show the number and list of unread messages in your inbox.
            </li>
            <li>
              To mark messages as read (remove the <code>UNREAD</code> label)
              when you ask it to.
            </li>
            <li>
              To confirm that the account you signed in with matches the address
              you entered.
            </li>
          </ul>
          <p>
            The app never sends, deletes, or drafts mail, and never changes your
            Gmail settings. It does not read message bodies beyond the snippet
            returned by Gmail.
          </p>

          <h2>Storage</h2>
          <p>All data stays on your Mac.</p>
          <ul>
            <li>
              Message data is not written to disk. The list of unread messages
              is kept in memory only while the app is running.
            </li>
            <li>
              OAuth refresh tokens, the OAuth client secret, and IMAP app
              passwords are stored in the macOS Keychain.
            </li>
            <li>
              Settings (accounts, display names, notification sounds, Chrome
              profile assignments, and the OAuth client ID) are stored in{" "}
              <code>~/Library/Application Support/GmailBar/settings.json</code>.
            </li>
          </ul>

          <h2>Sharing and transfer</h2>
          <ul>
            <li>
              The app communicates only with Google (
              <code>accounts.google.com</code>,{" "}
              <code>oauth2.googleapis.com</code>,{" "}
              <code>gmail.googleapis.com</code>, and <code>imap.gmail.com</code>{" "}
              for IMAP accounts). There is no developer server.
            </li>
            <li>
              Your data is not sold, shared with, or transferred to any third
              party.
            </li>
            <li>
              The app contains no analytics, advertising, or crash reporting.
            </li>
            <li>No human reads your data.</li>
            <li>
              Your data is not used to develop, improve, or train generalized
              AI or machine learning models.
            </li>
          </ul>

          <h2>Limited Use</h2>
          <p>
            GmailBar&apos;s use and transfer of information received from Google
            APIs will adhere to the{" "}
            <a href={userDataPolicyUrl}>Google API Services User Data Policy</a>
            , including the Limited Use requirements.
          </p>

          <h2>Retention and deletion</h2>
          <ul>
            <li>
              Removing an account in the app deletes that account&apos;s refresh
              token and app password from the Keychain. The OAuth client secret
              is shared by all accounts and remains until you delete it with
              the Keychain Access app (service{" "}
              <code>com.shoutawatanabe.gmailbar.secrets</code>, account{" "}
              <code>oauth-client-secret</code>).
            </li>
            <li>
              You can revoke the app&apos;s access at any time at{" "}
              <a href={permissionsUrl}>{permissionsUrl}</a>.
            </li>
            <li>
              Deleting the app and{" "}
              <code>~/Library/Application Support/GmailBar</code> removes all
              local data.
            </li>
          </ul>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, the updated version will be posted on this
            page with a new effective date.
          </p>

          <h2>Contact</h2>
          <p>
            Shouta Watanabe — <Mail />
          </p>
        </>
      }
      ja={
        <>
          <p>
            このプライバシーポリシーは、渡邉将大が開発する macOS
            のメニューバーアプリ GmailBar（以下「本アプリ」）が、ユーザーのデータをどのように取得・利用・保存・共有するかを説明するものです。
          </p>

          <h2>本アプリが取得する Google ユーザーデータ</h2>
          <p>
            Gmail API 方式でアカウントを追加すると、本アプリは OAuth スコープ{" "}
            <code>{scope}</code> の 1 つだけを要求します。<code>openid</code>
            、<code>email</code>、<code>profile</code>{" "}
            のスコープは要求しません。取得するデータは次のとおりです。
          </p>
          <ul>
            <li>
              受信トレイの未読メールについて: メッセージ ID、スレッド
              ID、差出人、件名、日付、Gmail が返す本文の冒頭（snippet）、ラベル、historyId
            </li>
            <li>サインインしたアカウントのメールアドレス</li>
          </ul>

          <h2>データの利用目的</h2>
          <ul>
            <li>受信トレイの未読の数と一覧を表示するため</li>
            <li>
              ユーザーの操作に応じてメールを既読にする（<code>UNREAD</code>{" "}
              ラベルを外す）ため
            </li>
            <li>
              サインインしたアカウントが、ユーザーが入力したアドレスと同じかを確かめるため
            </li>
          </ul>
          <p>
            メールの送信・削除・下書きの作成や、Gmail
            の設定の変更は一切しません。Gmail が返す snippet
            を超えてメール本文を読むこともありません。
          </p>

          <h2>保存場所</h2>
          <p>データはすべてお使いの Mac の中にとどまります。</p>
          <ul>
            <li>
              メールの内容はディスクに保存しません。未読の一覧は、本アプリが動いている間だけメモリに保持します。
            </li>
            <li>
              OAuth のリフレッシュトークン、OAuth クライアントシークレット、IMAP
              のアプリパスワードは macOS のキーチェーンに保存します。
            </li>
            <li>
              設定（アカウント、表示名、通知音、Chrome プロファイルの割り当て、OAuth
              クライアント ID）は{" "}
              <code>~/Library/Application Support/GmailBar/settings.json</code>{" "}
              に保存します。
            </li>
          </ul>

          <h2>共有と送信</h2>
          <ul>
            <li>
              通信先は Google だけです（<code>accounts.google.com</code>、
              <code>oauth2.googleapis.com</code>、
              <code>gmail.googleapis.com</code>、IMAP の場合は{" "}
              <code>imap.gmail.com</code>）。開発者のサーバーはありません。
            </li>
            <li>データを販売したり、第三者に提供・移転したりしません。</li>
            <li>アクセス解析、広告、クラッシュレポートの機能はありません。</li>
            <li>人がユーザーのデータを読むことはありません。</li>
            <li>
              ユーザーのデータを、汎用的な AI
              や機械学習モデルの開発・改善・学習に使いません。
            </li>
          </ul>

          <h2>Limited Use（利用制限）</h2>
          <p>
            本アプリによる Google API から受け取った情報の利用と移転は、Limited
            Use の要件を含む
            <a href={userDataPolicyUrl}>
              Google API Services User Data Policy
            </a>
            に従います。
          </p>

          <h2>保存期間と削除</h2>
          <ul>
            <li>
              本アプリでアカウントを削除すると、そのアカウントのリフレッシュトークンとアプリパスワードをキーチェーンから削除します。OAuth
              クライアントシークレットは全アカウント共通の設定のため、ユーザーがキーチェーンアクセス.app
              で削除するまで残ります（サービス名{" "}
              <code>com.shoutawatanabe.gmailbar.secrets</code>、アカウント名{" "}
              <code>oauth-client-secret</code>）。
            </li>
            <li>
              本アプリへのアクセス権は、
              <a href={permissionsUrl}>{permissionsUrl}</a>{" "}
              からいつでも取り消せます。
            </li>
            <li>
              本アプリと <code>~/Library/Application Support/GmailBar</code>{" "}
              を削除すると、ローカルのデータはすべてなくなります。
            </li>
          </ul>

          <h2>本ポリシーの変更</h2>
          <p>
            本ポリシーを変更した場合は、新しい施行日とともにこのページに掲載します。
          </p>

          <h2>連絡先</h2>
          <p>
            渡邉将大 — <Mail />
          </p>
          <p className="text-muted text-sm">
            英語版と日本語版で内容に相違がある場合は、英語版が優先します。
          </p>
        </>
      }
    />
  );
}
