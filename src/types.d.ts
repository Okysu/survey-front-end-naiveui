import {MessageApiInjection} from "naive-ui/es/message/src/MessageProvider";

declare global {
  const title = '调查问卷';

  interface Window {
    $message: MessageApiInjection
  }
}
