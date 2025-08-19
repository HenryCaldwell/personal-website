/**
 * .------------------------------------------------------------------------------------------------.
 * |   ____  _            _     _            _       ____                            _              |
 * |  | __ )| | __ _  ___| | __(_) __ _  ___| | __  / ___|___  _ __ ___  _ __  _   _| |_ ___ _ __   |
 * |  |  _ \| |/ _` |/ __| |/ /| |/ _` |/ __| |/ / | |   / _ \| '_ ` _ \| '_ \| | | | __/ _ \ '__|  |
 * |  | |_) | | (_| | (__|   < | | (_| | (__|   <  | |__| (_) | | | | | | |_) | |_| | ||  __/ |     |
 * |  |____/|_|\__,_|\___|_|\_\/ |\__,_|\___|_|\_\  \____\___/|_| |_| |_| .__/ \__,_|\__\___|_|     |
 * |  __     ___     _       |__/    _____            _             _   |_|                         |
 * |  \ \   / (_)___(_) ___  _ __   | ____|_   ____ _| |_   _  __ _| |_(_) ___  _ __                |
 * |   \ \ / /| / __| |/ _ \| '_ \  |  _| \ \ / / _` | | | | |/ _` | __| |/ _ \| '_ \               |
 * |    \ V / | \__ \ | (_) | | | | | |___ \ V / (_| | | |_| | (_| | |_| | (_) | | | |              |
 * |   __\_/  |_|___/_|\___/|_| |_| |_____| \_/ \__,_|_|\__,_|\__,_|\__|_|\___/|_| |_|              |
 * |  | ____|_ __   __ _(_)_ __   ___                                                               |
 * |  |  _| | '_ \ / _` | | '_ \ / _ \                                                              |
 * |  | |___| | | | (_| | | | | |  __/                                                              |
 * |  |_____|_| |_|\__, |_|_| |_|\___|                                                              |
 * |               |___/                                                                            |
 * '------------------------------------------------------------------------------------------------'
 */

// <[link, https://github.com/HenryCaldwell/blackjack-cv-ev-engine]>GitHub<[/link]> <[link, https://www.youtube.com/watch?v=opMLxb1acOM]>Demo<[/link]>

/**
 * <[bold]>DESCRIPTION<[/bold]>
 * A real-time computer vision engine that evaluates optimal blackjack decisions from live video. It
 * detects cards with an <[link, https://docs.ultralytics.com/]>Ultralytics YOLO<[/link]> model <[italic]>trained on a custom dataset of <[bold]>5,000<[/bold]> images<[/italic]>, tracks them
 * via a <[italic]>custom Hungarian-based tracker<[/italic]>, groups cards into dealer/player hands by overlap, and computes
 * expected values using a <[italic]>Java<[/italic]> backend accessed through JPype.
 */

 /**
 * <[bold]>STACK<[/bold]>
 * - <[bold]>Languages<[/bold]>: <[italic]>Python<[/italic]> <[color, #a6a6a6]>(engine/computer vision)<[/color]>, <[italic]>Java<[/italic]> <[color, #a6a6a6]>(evaluation)<[/color]>
 * - <[bold]>CV/ML<[/bold]>: <[italic]>Ultralytics YOLO<[/italic]> <[color, #a6a6a6]>(custom 5,000-image dataset)<[/color]>, <[italic]>OpenCV<[/italic]>
 * - <[bold]>Math<[/bold]>: <[italic]>SciPy<[/italic]> <[color, #a6a6a6]>(Hungarian algorithm)<[/color]>, <[italic]>NumPy<[/italic]>
 * - <[bold]>UI<[/bold]>: <[italic]>Matplotlib<[/italic]> <[color, #a6a6a6]>(Agg backend)<[/color]>, <[italic]>Rich<[/italic]> <[color, #a6a6a6]>(Live/Table)<[/color]>
 * - <[bold]>Interop<[/bold]>: <[italic]>JPype<[/italic]> <[color, #a6a6a6]>(Python, Java)<[/color]>
 */

/**
 * <[bold]>FEATURES<[/bold]>
 * - <[bold]>Card Detection<[/bold]>: Ultralytics YOLO trained and optimized on <[italic]>5,000 custom images<[/italic]> for robust,
 *   low-latency per-frame inference.
 * - <[bold]>Tracking<[/bold]>: Hungarian-based association with confirmation/removal windows, stable IDs and automatic
 *   pruning of stale tracks.
 * - <[bold]>Scoring<[/bold]>: Overlap clustering forming dealer/player hands. Blackjack scoring handles soft aces and
 *   10 value card normalization.
 * - <[bold]>Real-Time Evaluation<[/bold]>: Java EV core (via JPype) recursively computes stand, hit, double, split,
 *   surrender. Memoization with hashed <[italic]>StateKey<[/italic]> for speed.
 * - <[bold]>Threaded Pipeline<[/bold]>: Dedicated capture, analysis, and display threads. Bounded queues drop oldest
 *   frames to stay responsive.
 * - <[bold]>Live Display<[/bold]>: OpenCV window with Matplotlib overlays. Rich side panel with hands, expected value
 *   breakdowns, and deck composition with color cues.
 * - <[bold]>Deck Management:<[/bold]> Multi-deck counts with face-card normalization. Deck updates triggered on track
 *   confirmation callbacks.
 * - <[bold]>Config-Driven:<[/bold]> Single <[italic]>config.yaml<[/italic]> controls weights, paths, thresholds, frame sizes, deck count, and
 *   rule toggles.
 */
