export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function LoginIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}

export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 14.25C9 14.25 15.75 10.5002 15.75 5.25032C15.75 2.62542 13.5 0.783041 11.25 0.750485C10.125 0.734207 9 1.12549 8.25 2.25044C7.5 1.12549 6.35554 0.750486 5.25 0.750486C3 0.750486 0.75 2.62542 0.75 5.25032C0.75 10.5002 7.5 14.25 8.25 14.25Z"
        stroke="#2F384C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function CommentIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 5.25H10.5M4.5 8.25H7.5M13.2874 15.0224C13.1884 14.963 13.1389 14.9333 13.0896 14.9052C12.369 14.4948 11.5576 14.2701 10.7286 14.2513C10.6718 14.25 10.6141 14.25 10.4987 14.25H7.5C5.87228 14.25 5.05842 14.25 4.3928 14.0623C2.71847 13.5901 1.40993 12.2815 0.937724 10.6072C0.75 9.94158 0.75 9.12772 0.75 7.5C0.75 5.87228 0.75 5.05842 0.937724 4.3928C1.40993 2.71847 2.71847 1.40993 4.3928 0.937724C5.05842 0.75 5.87228 0.75 7.5 0.75H8.25C10.5797 0.75 11.7446 0.75 12.6634 1.1306C13.8886 1.63807 14.8619 2.61144 15.3694 3.83658C15.75 4.75544 15.75 5.92029 15.75 8.25V13.6281C15.75 13.8209 15.75 13.9173 15.7441 13.9836C15.6511 15.0295 14.5399 15.6586 13.5952 15.2003C13.5353 15.1712 13.4527 15.1216 13.2874 15.0224Z"
        stroke="#2F384C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.15082 8.82336L6.43539 9.56328C7.49022 12.306 8.01763 13.6773 8.72585 14.0222C9.33838 14.3205 10.0606 14.2865 10.6424 13.9319C11.3151 13.522 11.7113 12.1071 12.5036 9.27745L13.6169 5.3016C14.1185 3.51008 14.3693 2.61432 14.1365 1.99964C13.9336 1.46372 13.5105 1.0406 12.9745 0.837632C12.3599 0.604834 11.4641 0.855647 9.67257 1.35727L5.69666 2.47053C2.86699 3.26284 1.45215 3.65899 1.04218 4.33164C0.687599 4.91341 0.653568 5.63567 0.951877 6.24821C1.29678 6.95643 2.6681 7.48386 5.41074 8.53872L6.15082 8.82336ZM6.15082 8.82336L8.02582 6.94836"
        stroke="#2F384C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function BoldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    </svg>
  );
}

export function ItalicIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="4" x2="10" y2="4" />
      <line x1="14" y1="20" x2="5" y2="20" />
      <line x1="15" y1="4" x2="9" y2="20" />
    </svg>
  );
}

export function UnderlineIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  );
}

export function ListIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

export function OrderedListIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" y1="6" x2="21" y2="6" />
      <line x1="10" y1="12" x2="21" y2="12" />
      <line x1="10" y1="18" x2="21" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

export function CodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function TrashIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.08333 2.75021L2.47596 9.42494C2.52509 10.26 2.54965 10.6776 2.63453 11.0272C3.00769 12.5643 4.25151 13.7371 5.80782 14.0193C6.16183 14.0835 6.58011 14.0835 7.41667 14.0835C8.25322 14.0835 8.6715 14.0835 9.02552 14.0193C10.5818 13.7371 11.8256 12.5643 12.1988 11.0272C12.2837 10.6776 12.3082 10.26 12.3574 9.42493L12.75 2.75021M2.08333 2.75021H0.75M2.08333 2.75021H12.75M12.75 2.75021H14.0833M10.0833 2.75021L9.96368 2.39127C9.76698 1.80115 9.66863 1.50609 9.4862 1.28795C9.32511 1.09531 9.11823 0.946205 8.88454 0.854295C8.6199 0.750214 8.30888 0.750214 7.68684 0.750214H7.14649C6.52445 0.750214 6.21343 0.750214 5.9488 0.854295C5.7151 0.946205 5.50823 1.09531 5.34713 1.28795C5.16471 1.50609 5.06635 1.80115 4.86965 2.39127L4.75 2.75021M6.08333 6.08355V10.7502M8.75 6.08355V8.75021"
        stroke="#D83B3B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function MicIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 13.5C9.32143 13.5 12.75 11.25 12.75 7.5M6.75 13.5C4.17857 13.5 0.75 11.25 0.75 7.5M6.75 13.5V15.75M6.75 11.25C4.67893 11.25 3 9.57107 3 7.5V4.5C3 2.42893 4.67893 0.75 6.75 0.75C8.82107 0.75 10.5 2.42893 10.5 4.5V7.5C10.5 9.57107 8.82107 11.25 6.75 11.25Z"
        stroke="black"
        stroke-opacity="0.63"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ImageIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 4.87503C10.5 5.08214 10.3321 5.25003 10.125 5.25003C9.9179 5.25003 9.75 5.08214 9.75 4.87503M10.5 4.87503C10.5 4.66792 10.3321 4.50003 10.125 4.50003C9.9179 4.50003 9.75 4.66792 9.75 4.87503M10.5 4.87503L9.75 4.87503M14.25 9.7501L14.25 5.2501C14.7614 4.86653 15.0171 4.67474 15.2121 4.59983C16.0351 4.2837 16.952 4.74212 17.1929 5.5902C17.25 5.79116 17.25 6.1108 17.25 6.75007L17.25 8.25009C17.25 8.88938 17.25 9.20902 17.1929 9.41C16.952 10.2581 16.0352 10.7165 15.2122 10.4004C15.0171 10.3255 14.7614 10.1337 14.25 9.7501ZM7.5 14.25C5.87228 14.25 5.05842 14.25 4.3928 14.0623C2.71847 13.5901 1.40993 12.2816 0.937724 10.6072C0.75 9.94161 0.75 9.12775 0.75 7.50003C0.75 5.87231 0.75 5.05845 0.937724 4.39283C1.40993 2.7185 2.71847 1.40996 4.3928 0.937754C5.05842 0.750031 5.87228 0.750031 7.5 0.750031C9.12773 0.750031 9.94159 0.750031 10.6072 0.937754C12.2815 1.40996 13.5901 2.7185 14.0623 4.39283C14.25 5.05845 14.25 5.87231 14.25 7.50003C14.25 9.12775 14.25 9.94161 14.0623 10.6072C13.5901 12.2816 12.2815 13.5901 10.6072 14.0623C9.94159 14.25 9.12773 14.25 7.5 14.25Z"
        stroke="black"
        stroke-opacity="0.63"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function SendIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_292)">
        <path
          d="M6.55196 11.25C6.22572 11.25 6.0626 11.25 5.91568 11.2036C5.78564 11.1626 5.66538 11.0954 5.56227 11.0061C5.44577 10.9053 5.36028 10.7664 5.1893 10.4886L4.33542 9.10099C2.1403 5.53393 1.04274 3.7504 1.26983 2.75441C1.46586 1.89469 2.10028 1.20182 2.93944 0.930999C3.91161 0.617244 5.78471 1.55379 9.5309 3.42689L19.5217 8.42228C21.8247 9.5738 22.9762 10.1496 23.3458 10.9287C23.6673 11.6067 23.6673 12.3933 23.3458 13.0713C22.9762 13.8504 21.8247 14.4262 19.5217 15.5777L9.5309 20.5731C5.78471 22.4462 3.91161 23.3827 2.93944 23.069C2.10028 22.7982 1.46586 22.1053 1.26983 21.2456C1.04274 20.2496 2.1403 18.466 4.33542 14.899L5.18929 13.5114C5.36027 13.2336 5.44576 13.0947 5.56226 12.9939C5.66537 12.9046 5.78563 12.8374 5.91566 12.7964C6.06259 12.75 6.22571 12.75 6.55194 12.75L11.25 12.75C11.6642 12.75 12 12.4142 12 12C12 11.5858 11.6642 11.25 11.25 11.25L6.55196 11.25Z"
          fill="#5057EA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_292">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function EmojiIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function AuthIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8L8 7.50003C8 6.10444 8 5.40665 8.17225 4.83884C8.56005 3.56045 9.56045 2.56005 10.8388 2.17225C11.4066 2 12.1044 2 13.5 2L15.6 2C17.8402 2 18.9603 2 19.816 2.43597C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C22 5.03969 22 6.15979 22 8.4L22 15.6C22 17.8402 22 18.9603 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C18.9603 22 17.8402 22 15.6 22H13.5C12.1044 22 11.4067 22 10.8389 21.8278C9.56046 21.44 8.56003 20.4395 8.17223 19.1611C8 18.5933 8 17.8956 8 16.5L8 16M2 12H17M17 12L13 8M17 12L13 16"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
