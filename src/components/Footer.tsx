import { LinkIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className="p-2 min-w-full text-center border-t-[1.5px] dark:border-amber-300 border-amber-400 shadow-inner bg-zinc-100 dark:bg-zinc-900">
      <span className="text-center">
        <a
          href="https://github.com/PrzemyslawTrabuc"
          className="hover:underline"
        >
          Przemysław Trabuć
          <LinkIcon className="h-5 m-2 inline-block"></LinkIcon>
        </a>
      </span>
    </footer>
  );
}

export default Footer;
