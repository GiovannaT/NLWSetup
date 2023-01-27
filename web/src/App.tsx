import "./lib/dayjs";
import "./styles/globals.css";
import { url } from "./lib/axios";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

// window.Notification.requestPermission((permission) => {
//   if (permission === "granted") {
//     new window.Notification("Habits", {
//       body: "Texto", 
//     });
//   }
// });

navigator.serviceWorker.register('service-worker.js').then( async serviceWorker => {
  let subscription = await serviceWorker.pushManager.getSubscription()

  if(!subscription) {

    const publicKeyResponse = await url.get('/push/public_key')

    subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKeyResponse.data.publicKey,
    })
  }

  await url.post('/push/register', {
    subscription
  })

  await url.post('/push/send', {
    subscription
  })
})

export function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-background text-white">
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
          <Header />
          <SummaryTable />
        </div>
      </div>
    </>
  );
}
