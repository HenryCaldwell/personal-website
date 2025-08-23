/**
 * .--------------------------------------------------------------------------------------.
 * |   ____  _                 _        ____  _            _        _           _         |
 * |  / ___|(_)_ __ ___  _ __ | | ___  | __ )| | ___   ___| | _____| |__   __ _(_)_ __    |
 * |  \___ \| | '_ ` _ \| '_ \| |/ _ \ |  _ \| |/ _ \ / __| |/ / __| '_ \ / _` | | '_ \   |
 * |   ___) | | | | | | | |_) | |  __/ | |_) | | (_) | (__|   < (__| | | | (_| | | | | |  |
 * |  |____/|_|_| |_| |_| .__/|_|\___| |____/|_|\___/ \___|_|\_\___|_| |_|\__,_|_|_| |_|  |
 * |                    |_|                                                               |
 * '--------------------------------------------------------------------------------------'
 */


// <[link, https://github.com/HenryCaldwell/java-blockchain]>GitHub<[/link]>


/**
 * <[bold]>DESCRIPTION<[/bold]>
 * A <[italic]>UTXO-based<[/italic]> blockchain in <[italic]>Java<[/italic]>. Blocks hold a Merkle root, timestamp, and nonce. Mining searches
 * for a hash with a difficulty target (leading zeroes). Transactions are <[italic]>ECDSA<[/italic]>-signed, fees are
 * size-based (satoshis/byte), and a global UTXO pool enforces spend rules. Per-block <[italic]>usedUTXOs<[/italic]> prevents
 * intra-block double-spends. Includes wallets, a genesis setup, and a full-chain verifier with
 * documented error codes.
 */


 /**
 * <[bold]>STACK<[/bold]>
 * - <[bold]>Language<[/bold]>: <[italic]>Java<[/italic]>
 * - <[bold]>Crypto<[/bold]>: <[italic]>SHA-256<[/italic]> <[color, #a6a6a6]>(hashing)<[/color]>, <[italic]>Bouncy Castle<[/italic]> <[color, #a6a6a6]>(ECDSA)<[/color]>
 */

 
/**
 * <[bold]>FEATURES<[/bold]>
 * - <[bold]>Proof of Work<[/bold]>: Adjustable difficulty with nonce search until the block hash meets the target.
 * - <[bold]>Chain Integrity<[/bold]>: Hash links between blocks and a Merkle root per block for transaction integrity.
 * - <[bold]>UTXO Model<[/bold]>: Inputs spend referenced outputs to prevent double spend and return change to the
 *   sender.
 * - <[bold]>Digital Signatures<[/bold]>: ECDSA via Bouncy Castle to authenticate senders and protect transactions.
 * - <[bold]>Fees and Sizing<[/bold]>: Byte-based fee calculation with a tunable <[italic]>fee rate<[/italic]>.
 * - <[bold]>Validation Pipeline<[/bold]>: End-to-end checks for mining target, signatures, input-output conservation,
 *   recipient correctness, and change handling.
 */
