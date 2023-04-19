import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-background',
  templateUrl: './code-background.component.html',
  styleUrls: ['./code-background.component.scss'],
})
export class CodeBackgroundComponent implements OnInit {
  codeText: string = ''; // Aquí se almacenará el texto que se está escribiendo.
  codeTextFull: string =
    "const app = express();\napp.use(bodyParser.json());\n\nconst users: User[] = [];\n\napp.get('/users', (req: Request, res: Response) => {\n    res.json(users);\n});\n\napp.post('/users', (req: Request, res: Response) => {\n    const { name, email } = req.body;\n\n    if (!name || !email) {\n        return res.status(400).send('Name and email are required');\n    }\n\n    const newUser: User = { id: uuid(), name, email };\n    users.push(newUser);\n\n    res.status(201).json(newUser);\n});"; // Aquí se almacena el texto completo que se va a escribir.
  rustCode: string =
    'use args::{Commands, GitSubcommands};\nuse clap::Parser;\nuse commit::commit;\nuse config::{load_config, Config};\nuse git::git_log;\nuse restore::restore;\n\nuse crate::args::Cli;\n\nfn main() {\n    let cli: Cli = Cli::parse();\n    let config:Config = match load_config(){\n        Ok(config) => config,\n        Err(e) => {\n            eprint!("{e}");\n            std::process::exit(1);\n        },\n    };\n    match &cli.command {\n        Some(Commands::Commit {}) => {\n            commit(config.use_emoji);\n        }\n        Some(Commands::Git(commit)) => match &commit.command {\n            Some(GitSubcommands::Restore {}) => {\n                restore();\n            },\n            Some(GitSubcommands::Log {}) => {\n                git_log();\n            },\n            None => todo!(),\n        },\n        None => (),\n    }\n}';
  tomlCode: string =
    '[Config]\nuse_emoji = true\n\n[[CommitType]]\nname = "Feat"\nemoji = "✨"\ndescription = "New feature or functionality added to the code"\nrelease = true\n\n[[CommitType]]\nname = "Fix"\nemoji = "🐛"\ndescription = "Bug fix"\nrelease = true\n\n[[CommitType]]\nname = "Perf"\nemoji = "⚡️"\ndescription = "Code performance improvements"\nrelease = true\n\n[[CommitType]]\nname = "Docs"\nemoji = "📚"\ndescription = "Changes to the documentation"\nrelease = false\n\n[[CommitType]]\nname = "Style"\nemoji = "🎨"\ndescription = "Code style changes"\nrelease = false\n\n[[CommitType]]\nname = "Refactor"\nemoji = "🌿"\ndescription = "Changes without adding features, just quality of the code"\nrelease = false\n\n[[CommitType]]\nname = "Remove"\nemoji = "🛑"\ndescription = "Remove code or files"\nrelease = false\n\n[[CommitType]]\nname = "Config"\nemoji = "🔧"\ndescription = "Changes in project configuration"\nrelease = false\n';
  scssCode: string =
    '// Theme object.$angular-theme: mat.define-dark-theme((\n    color: (\n        primary: primary.$theme-primary,\n        accent: accent.$theme-accent,\n        warn: warn.$theme-warn,\n    ),\n    typography: font.$fontConfig,\n)\n;$angular-theme: set-background.modify-background($angular-theme, background.$mat-dark-theme-background);\n// Theme Init\n@include mat.all-component-themes($angular-theme);\n// Classes generator\n@mixin generate-material-classes {\n    @include teme-class-generator.generateColors(primary, primary.$mat-primary);\n    @include teme-class-generator.generateColors(accent, accent.$mat-accent);\n    @include teme-class-generator.generateColors(warning, warn.$mat-warn);\n    @include teme-class-generator.generateColors("", background.$mat-dark);\n}\n@include generate-material-classes();\n// Specific component overrides, pieces that are not in line with the general theming\n// Handle buttons appropriately, with respect to line-height\n.mat-raised-button,\n.mat-stroked-button,\n.mat-flat-button {\n    padding: 0 1.15em;\n    margin: 0 0.65em;\n    min-width: 3em;\n    line-height: 36.4px;\n}\n.mat-standard-chip {\n    padding: 0.5em 0.85em;\n    min-height: 2.5em;\n}\n.material-icons {\n    font-size: 24px;\n    font-family: "Material Icons", "Material Icons";\n    .mat-badge-content {\n        font-family: "Roboto";\n    }\n}\n';
  solanaCode: string =
    'export async function createTokenAccount(\n    connection: Connection,\n    payer: Keypair,\n    mint: PublicKey,\n    owner: PublicKey\n) {\n\n    // ATA = Associated Token Address\n    const ATA = await getAssociatedTokenAddress(mint, owner, true, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID);\n\n    let account;\n\n    try {\n        account = await getAccount(connection, ATA, "confirmed", TOKEN_PROGRAM_ID);\n    }\n    catch (error) {\n        if (error instanceof TokenAccountNotFoundError || error instanceof TokenInvalidAccountOwnerError) {\n            try {\n                const transaction = new Transaction().add(\n                    createAssociatedTokenAccountInstruction(\n                        payer.publicKey,\n                        ATA,\n                        owner,\n                        mint,\n                        TOKEN_PROGRAM_ID,\n                        ASSOCIATED_TOKEN_PROGRAM_ID,\n                    )\n                );\n                const transactionSignature = await sendAndConfirmTransaction(\n                    connection,\n                    transaction,\n                    [payer]\n                );\n            }\n            catch (error) {}\n            account = await getAccount(connection, ATA, "confirmed", TOKEN_PROGRAM_ID);\n        }\n        else {\n            throw error;\n        }\n    }\n\n    console.log(Token Account: ${account.address});\n\n    return account;\n}';
  typingSpeed: number = 15; // Velocidad de escritura (en milisegundos).

  ngOnInit(): void {
    this.animate();
  }

  async animate(): Promise<void> {
    const codes = [
      this.tomlCode,
      this.scssCode,
      this.rustCode,
      this.codeTextFull,
      this.solanaCode,
    ]; // arreglo con los códigos posibles
    const code = codes[Math.floor(Math.random() * codes.length)]; // código aleatorio

    await this.animateTyping(code); // ejecutar la función animateTyping con el código aleatorio

    // esperar hasta que se termine de ejecutar la función animateTyping y luego llamar a esta función nuevamente
    setTimeout(async () => {
      await this.animate();
    }, code.length * 2 * this.typingSpeed + 5000); // esperar el tiempo que toma escribir el código y 3 segundos adicionales antes de llamar a la función nuevamente
  }

  async animateTyping(code: string): Promise<void> {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < code.length) {
        this.codeText += code.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(async () => {
          await this.animateDeleting(code);
        }, 3000);
      }
    }, this.typingSpeed);
  }

  async animateDeleting(code: string): Promise<void> {
    let i = code.length - 1;
    const deletingInterval = setInterval(() => {
      if (i >= 0) {
        this.codeText = this.codeText.slice(0, -1); // Elimina el último carácter del texto
        i--;
      } else {
        clearInterval(deletingInterval);
      }
    }, this.typingSpeed);
  }
}
