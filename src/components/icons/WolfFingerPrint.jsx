import React from "react";

export default function WolfFingerPrint({ size = "40" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="hovered-paths"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 511.999 511.999"
    >
      <path
        fill="#1b1e24"
        d="M406.906 413.073c-6.28 47.999-56.649 77.478-103.257 64.428-13.87-3.88-30.299-6.13-47.899-6.13-17.31 0-33.469 2.17-47.189 5.93-49.677 13.622-103.847-20.325-103.847-74.858 0-22.389 9.73-42.499 25.199-56.349 0 0 32.369-28.169 56.169-82.798 11.37-27.359 38.349-46.599 69.818-46.599 31.479 0 58.458 19.23 69.828 46.589 19.049 43.719 43.569 70.478 52.609 79.438 20.64 16.037 32.273 41.844 28.569 70.349zM108.764 214.588c17.17 33.239 11.12 70.508-13.52 83.238-24.639 12.73-58.539-3.9-75.718-37.139-17.17-33.239-11.12-70.508 13.52-83.238 24.639-12.74 58.538 3.89 75.718 37.139zM344.088 31.813c26.149 3.09 44.349 38.689 39.729 77.748-4.3 36.261-29.395 69.843-56.789 66.308-26.149-3.08-44.339-38.689-39.719-77.748 4.208-35.561 28.97-69.897 56.779-66.308zM224.401 97.921c2.38 20.039-1.18 40.099-9.74 55.059-7.398 12.922-19.03 22.929-33.709 22.929-24.909 0-48.709-29.859-53.039-66.538-2.37-20.019 1.18-40.099 9.74-55.059 7.311-12.771 18.867-22.909 33.699-22.909 24.91 0 48.719 29.839 53.049 66.518zm254.054 79.558c24.639 12.74 30.689 50.009 13.52 83.248-17.18 33.239-51.079 49.869-75.718 37.139-24.639-12.73-30.689-49.999-13.52-83.238 17.179-33.249 51.078-49.879 75.718-37.149z"
        data-original="#787880"
      ></path>
      <path
        fill="#272b34"
        d="M295.999 301.376c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10z"
        className="hovered-path"
        data-original="#020202"
      ></path>
      <path
        fill="#272b34"
        d="M177.132 259.377c-22.5 51.606-53.238 78.916-53.533 79.174l-.106.094c-18.131 16.233-28.528 39.487-28.528 63.799 0 29.721 14.153 55.568 38.705 71.945 22.876 15.262 51.229 19.838 77.784 12.557 13.308-3.646 28.711-5.574 44.547-5.574 16.103 0 31.734 1.992 45.203 5.76a94.262 94.262 0 0077.421-12.172c24.834-16.409 39.232-42.5 39.232-72.516 0-26.399-11.886-50.865-32.637-67.226-9.374-9.369-32.107-34.727-50.041-75.851-13.336-31.998-44.347-52.669-79.028-52.669-34.674 0-65.68 20.675-79.019 52.679zm139.613 7.748l.066.156c19.586 44.95 44.804 72.7 54.736 82.546.286.282.588.548.904.794 16.146 12.545 25.405 31.434 25.405 51.823 0 23.266-11.132 43.193-30.258 55.83-18.023 11.908-40.258 15.406-61.005 9.599-15.201-4.253-32.695-6.5-50.594-6.5-17.596 0-34.827 2.174-49.834 6.286-20.966 5.749-43.344 2.138-61.398-9.906-18.85-12.575-29.804-32.234-29.804-55.309 0-18.614 7.956-36.421 21.829-48.863 2.134-1.871 34.586-30.925 58.707-86.29l.066-.156c10.208-24.564 33.988-40.436 60.584-40.436 26.606-.001 50.39 15.867 60.596 40.426z"
        className="hovered-path"
        data-original="#020202"
      ></path>
      <path
        fill="#272b34"
        d="M306.48 332.101c15.217 23.363 29.645 38.923 36.893 46.119 3.918 3.89 10.25 3.869 14.143-.051 3.891-3.919 3.868-10.251-.051-14.143-6.684-6.636-20.017-21.025-34.225-42.84-3.014-4.627-9.208-5.938-13.837-2.923-4.629 3.016-5.937 9.211-2.923 13.838zM166.697 21.683c-14.966 1.771-28.272 11.595-37.473 27.662-9.603 16.782-13.609 39.089-10.991 61.198 8.291 70.245 73.684 102.728 105.357 47.401 9.609-16.795 13.615-39.102 10.991-61.195-5.076-43.013-34.741-79.046-67.884-75.066zm39.537 126.328c-23.047 40.264-62.693 6.318-68.139-39.815-2.125-17.947.97-35.776 8.488-48.915 5.474-9.563 14.013-17.879 25.02-17.879 19.682 0 39.427 26.419 43.119 57.699 2.129 17.933-.965 35.76-8.488 48.91zM78.357 169.795c-17.219-8.446-34.853-8.882-49.653-1.229-14.8 7.647-24.642 22.28-27.716 41.207-2.895 17.824.623 37.534 9.905 55.505 9.287 17.968 23.329 32.242 39.542 40.194 16.09 7.892 33.916 9.367 49.65 1.238 14.802-7.647 24.645-22.282 27.718-41.21 2.895-17.823-.623-37.534-9.905-55.503-9.286-17.972-23.329-32.25-39.541-40.202zm29.705 92.5c-2.032 12.518-8.126 21.98-17.157 26.646-9.03 4.668-20.274 4.161-31.663-1.425-12.39-6.077-23.25-17.237-30.581-31.42-7.327-14.185-10.145-29.496-7.933-43.117 2.033-12.518 8.127-21.979 17.158-26.645l.003-.002c9.986-5.163 21.552-3.539 31.66 1.419 12.389 6.077 23.249 17.238 30.58 31.426 7.327 14.185 10.145 29.498 7.933 43.118zM340.618 21.593c-30.32 0-57.99 33.099-62.989 75.353-5.332 45.096 17.416 89.143 53.37 89.143 30.315 0 57.988-33.098 62.999-75.353 5.325-45.014-17.355-89.143-53.38-89.143zm33.519 86.79c-3.843 32.404-25.321 60.197-45.577 57.569l-.111-.014c-9.093-1.07-17.718-8.36-23.662-19.999-6.612-12.943-9.271-29.943-7.297-46.643 3.702-31.278 23.452-57.704 43.129-57.704.926 0 1.724.045 2.439.138 10.663 1.185 18.917 10.504 23.779 20.019 6.614 12.941 9.274 29.939 7.3 46.634zm10.061 157.158c6.399 39.407 41.956 57.344 77.368 39.972 33.539-16.451 55.437-58.816 49.447-95.7-6.324-38.946-41.53-57.564-77.369-39.978-33.529 16.448-55.437 58.818-49.446 95.706zm58.255-77.752c23.53-11.543 44.613-.675 48.82 25.229 4.564 28.104-12.792 61.921-38.514 74.538-11.388 5.585-22.632 6.09-31.663 1.425v.001c-9.031-4.667-15.125-14.131-17.157-26.647-4.572-28.156 12.837-61.948 38.514-74.546z"
        className="hovered-path"
        data-original="#020202"
      ></path>
    </svg>
  );
}